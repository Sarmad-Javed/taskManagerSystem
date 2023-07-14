# Task Manager System

Your task is to implement the UI of a simplified task management system.

## Business Requirements

Requirements are additive. All requirements from Level 1 carry over to Level 2, etc.

### Level 1
```
The system should allow the user to add new tasks to the dashboard. For this level, implement functionality to support such user input via an Create task form.
```
```Cucumber
Scenario: Submitting a form
  Given Both `Title` and `Description` fields are not empty
   When "Add new task" button is clicked
   Then Form is submitted successfully
    And New task is added to the "To Do" column
```
```Cucumber
Scenario: Submitting a form with empty mandatory fields
  Given An empty mandatory field, either `Title` or `Description`
   When "Add new task" button is clicked
   Then Form is not submitted
    And New task is not added to the dashboard
```

### Level 2
```
For this level, instead of using hardcoded data, implement functionality to support using APIs to retrieve data for tasks and users. You are given 2 APIs:
Tasks API: GET https://testapi.codesignal.com/taskManagementSystem/tasks
Users API: GET https://testapi.codesignal.com/taskManagementSystem/users/{userId}
```

Task Data Shape:
```
{
  "id": "a2fa4580-b071-11ec-b909-0242ac120002",
  "title": "Fix CSS",
  "description": "Homepage footer uses an inline style — should use a class",
  "status": "TO_DO" // TO_DO | IN_PROGRESS | DONE
}
```

User Data Shape:
```
{
  "id": "f9f6757f-c07e-46d7-ae93-21cbe1f9980b",
  "firstName": "Donovan",
  "lastName": "Marsh"
}
```

```Cucumber
Scenario: Using the Tasks API 
  Given Tasks API returns a JSON with tasks data
   When Dashboard is rendered
   Then All tasks are displayed in the appropriate column based on the given template
```
```Cucumber
Scenario: Display assigned user 
  Given A task which contains the "assignedUser" field
    And Users API returns a 200 response with user information
   When Task card is rendered
   Then Task card contains information about assigned user
```
```Cucumber
Scenario: Do not display assigned user when "assignedUser" doesn't exist 
  Given A task which doesn't contain the "assignedUser" field
   When Task card is rendered
   Then Task card doesn't contain information about assigned user
```
```Cucumber
Scenario: Do not display assigned user when Users API returns 404 
  Given A task which contains the "assignedUser" field
    And Users API returns a 404 response
   When Task card is rendered
   Then Task card doesn't contain information about assigned user
```

### Level 3
```
For this level, implement functionality to enable the user to move the tasks between columns.
```

```Cucumber
Scenario: Rendering "Move left" and "Move right" buttons conditionally
  Given Tasks API returned a JSON with tasks data
   When Dashboard is rendered
   Then All tasks are displayed in the appropriate column based on the given template
    And Tasks in the "To Do" column only have the "Move right" button
    And Tasks in the "In Progress" column have the "Move left" and "Move right" buttons
    And Tasks in the "Done" column only have the "Move left" button
```
```Cucumber
Scenario: Moving cards between columns 
  Given A task card with the "Move right" and/or "Move left" buttons
   When "Move right" or "Move left" button is clicked
   Then Task card is added to the end of the corresponding column
    And Task card is removed from its original column
```

# Start App
```
npm run start
```
## Solutions

* Snippets are available in `solution-snippets` folder. This is a trimmed down version of each level's solution
* Complete solutions with the full Angular project setup are available in `complete-solutions` folder