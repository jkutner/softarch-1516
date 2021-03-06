@https://www.pivotaltracker.com/story/show/104353948 @communicate_availability @meeting_participant
  Feature: Provide availability for time slot
    In order to communicate availability
    As a meeting participant
    I want to provide availability for a meeting proposal time slot

  Background:
    Given the organizer creates the meeting proposal:
      | title  | description | organizer     | slotDuration|
      | Test   | Testdescr   | test@test.com | 2           |
    And adds a participant with "test@test.com" email to the previously created meeting proposal
    Then the response is status code 204
    And the organizer creates a new time slot "2015-07-11T11:00:00.000+0000"
    Then the response is status code 201
    And the organizer associates the previous time slot to the created meeting proposal
    Then the response is status code 204

    Scenario: a new availability created and associated with timeSlot
      And The organizer create a new availability "MAYBE"
      Then the response is status code 201
      And the organizer associates the previous meeting proposal with the email parcitipant, timeslot and availability "MAYBE"
      Then the response is status code 201


    Scenario: Create a bad availability
      When The organizer create a new availability "MAYBEEE"
      Then the response is status code 500
      And  error message contains "value not one of declared Enum instance names: [MAYBE, NO, YES]"