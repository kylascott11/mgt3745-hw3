# Features and specification

Status: ACTIVE. Copy and revise your own HW2 FEATURES.md here.

## Kano-Classified Feature List

**Classification date:** 9/9/2026

| # | Feature | Kano class | Reason from research |
|---|---------|-----------|----------------------|
| 1 |Anonymous Discussion Board| Attractive          | *Both interviews compared themselves to others, while neither person mentioned having access to other people's experiences that could reassure them that they weren't alone. An anonymous space would allow users to hear directly from people who have experienced similar situations, providing them more realistic expectations.*                  |
| 2 |Editable Progress Markers|Attractive|*Profile A identified passing his first check ride as an important milestone that would prove to himself he is capable of becoming a pilot. Seeing progress toward meaningful milestones could help him recognize his development rather than focusing only on how far ahead others are.*                  |
| 3 |Celebration/Encouragement Notifications|Indifferent           | *Profile B already reminds herself that she was accepted, suggesting additional generic reassurance may not resolve the underlying comparison. Profile A's Flight School posts Instagram stories when students pass check-rides and get their licenses, so additional celebration notifications might not contribute much.*                   |
| 4 |Personalized Environment Expectations        |   Attractive        |   *Both profiles felt insecure when their experiences differed from those around them. Profile A compared his flight experience to more experienced coworkers, while Profile B compared her social experience to her roommate and floormates. Providing expectations pulled from existing, reliable resources could give users a reference point based on environmental expectations instead of relying on the people around them to determine what is normal.*                  |
| 5 |Performance Benchmarking         |    Reverse       |  *Depending on the person, this could be an attractive feature. However, based on my interviews, both Profile A and Profile B  used people around them as benchmarks for whether they were doing well, and both experienced insecurity when they perceived themselves as falling short. Even if I choose the right peer set for them to compare to, providing additional rankings could reinforce the imposter syndrome if they're falling short of the applicable peer set.* |
| 6 | Resources Page        |   Attractive        |  *Profile A is studying beyond what is required to become more knowledgeable and contribute to conversations with coworkers. Profile B seeks out friends with similar experiences for support, suggesting that personalized resources could provide useful information or guidance beyond what they currently have access to.*                  |

## 1. Context

*People entering new or unfamiliar environments may have difficulty determining whether they are doing enough to meet their own expectations and the expectations of their environment. They may compare themselves to people around them without knowing whether those people are appropriate benchmarks or whether their own experience is within the expected range. The program helps users identify the expectations of their environment, track their own progress toward those expectations, and access relevant resources so they can better determine where they currently stand.*

---

## 2. Users

*The program is designed for users experiencing feelings of being less qualified, behind, or out of place in a changing, new, or unfamiliar environment.*
- [Profile A](USERS.md#profile-a)
- [Profile B](USERS.md#profile-b)

---

## 3. Scope

**This does:**
- *Identify expectations for their current environment.*
- *Record and display their progress toward those expectations.*
- *Access resources relevant to their current expectations or areas of improvement.*
- *View experiences from other people in similar situations without using those experiences as performance standards.*

**This deliberately does not do:**
- *Determine whether a user is successful or unsuccessful.*
- *Rank users against other individuals.*
- *Tell users how they should feel about their performance.*
- *Guarantee that users will feel more confident or that feelings of imposter syndrome will disappear.*
- *Use generic encouragement as evidence that a user is meeting expectations.*

---

## 4. Behavior

***1:** Identify the user's situation*
- *1. When a user begins using the program, the system shall prompt the user to identify the environment and situation they want to evaluate.*
- *2. The system shall allow the user to select an environment such as school, work, training, or another relevant environment.*
- *3. The system shall allow the user to provide additional information about their current stage or situation within that environment.*
- *4. The system shall use the selected environment and situation to determine which expectations and resources to display.*

***2:** Display Environment Expectations*
- *1. When an environment is identified, the system shall display expectations obtained from an identified external source or uploaded user materials.*
- *2. The system shall use information from identified external sources such as official websites, syllabi, handbooks, training materials, or user-uploaded documents.*
- *3. The system shall identify the source of each expectation and allow the user to access the original source when available.*
- *4. The system shall allow the user to upload materials containing information about expectations for their environment.*
- *5. The system shall present expectations based on the user's current environment or stage rather than the performance of a specific individual.*
- *6. If reliable information about an expectation is not available, it should indicate that the expectation could not be established.*

***3:** Track personal progress*
- *1. When expectations are displayed, the system shall allow the user to create personal progress markers related to those expectations.*
- *2. Each progress marker shall include a description and a user-selected status.*
- *3. The user shall be allowed update the status of a progress marker.*
- *4. The system shall display completed and incomplete progress markers separately.*
- *5. The system shall not compare the user's progress markers with another user's progress.*

***4:** Provide personalized resources*
- *1. When a user identifies an expectation they do not understand or have not yet met, the system shall display resources associated with that expectation when such resources exist.*
- *2. Resources may include educational materials, institutional information, guides, or other materials relevant to the user's environment.*
- *3. The system shall identify the source of each external resource.*
- *4. The system shall allow the user to access the original resource when available.*
- *5. If no relevant resource is found, the platform should indicate that no matching resource was found.*

***5:** Provide anonymous experiences*
- *1. When a user chooses to view other experiences, the platform should display anonymous experiences from users in relevant situations when available.*
- *2. The system shall organize experiences by relevant environment or situation based on the user's selection of environment.*
- *3. The system shall not present another user's experience as evidence that the current user is meeting or failing to meet expectations.*
- *4. The user shall be able to choose whether to view other users' experiences.*

***6:** Benchmarking*
- *1. The program shall not display leaderboards or rankings of users.*
- *2. The program shall not calculate a user's rank relative to other users.*
- *3. When presenting information about other people's experiences, the program shall emphasize differences in experiences rather than rank users by performance.*
- *4. If benchmark information is provided, it shall describe environmental expectations or requirements rather than individual user rankings.*

---

## 5. Constraints

*The program will use reliable information when establishing expectations for an environment and will identify the source of each external expectation or resource when available. The program should distinguish between information obtained from an external source and information generated by the program. Users will not be required to identify themselves, and anonymous experiences will not display personally identifying information to other users. The program will not diagnose users with imposter syndrome or other health conditions and will not present unsupported information as an established expectation. The program shall not require users to compare their performance with another individual and shall use expectations for the user's environment rather than individual peer performance as the primary basis for evaluating progress.*

---

## 6. Acceptance

- [ ] **A - 01:** *WHEN a user begins using the program, THE SYSTEM SHALL prompt the user to identify an environment and situation.*
- [ ] **A - 02:** *WHEN a user selects an environment, THE SYSTEM SHALL allow the user to select or enter their current stage or situation within that environment.*
- [ ] **A - 03:** *WHEN a user provides an environment and situation, THE SYSTEM SHALL display expectations and resources associated with that environment and situation.*
- [ ] **A - 04:** *WHEN a user changes their selected environment or situation, THE SYSTEM SHALL replace the displayed expectations and resources with those associated with the new environment or situation.*
- [ ] **A - 05:** *WHERE a user uploads an external resource, THE SYSTEM SHALL analyze the resource to identify expectations stated for the user's selected environment.*
- [ ] **A - 06:** *WHEN a user identifies an environment, THE SYSTEM SHALL display expectations obtained from an identified external source or from materials uploaded by the user.*
- [ ] **A - 07:** *WHEN an expectation is displayed, THE SYSTEM SHALL identify the source from which the expectation was obtained.*
- [ ] **A - 08:** *WHEN a user selects an available source, THE SYSTEM SHALL provide access to the original source.*
- [ ] **A - 09:** *WHEN a user's current stage or situation is provided, THE SYSTEM SHALL display expectations identified for that stage or situation.*
- [ ] **A - 10:** *IF an expectation cannot be supported by an identified external source, THEN THE SYSTEM SHALL indicate that the expectation could not be established.*
- [ ] **A - 11:** *THE SYSTEM SHALL NOT present an unsupported claim as an established expectation.*
- [ ] **A - 12:** *WHEN a user creates a progress marker, THE SYSTEM SHALL display the marker in the user's progress list.*
- [ ] **A - 13:** *WHEN a user assigns a status to a progress marker, THE SYSTEM SHALL display that status with the marker.*
- [ ] **A - 14:** *WHEN a user updates a progress marker, THE SYSTEM SHALL display the updated information.*
- [ ] **A - 15:** *WHEN a user marks a progress marker as complete, THE SYSTEM SHALL display it as completed.*
- [ ] **A - 16:** *WHEN a user views their progress, THE SYSTEM SHALL display their progress without ranking it against another user's progress.*
- [ ] **A - 17:** *WHEN a user removes a progress marker, THE SYSTEM SHALL remove it from the user's progress list.*
- [ ] **A - 18:** *WHEN a user identifies an expectation they do not understand or have not yet met, THE SYSTEM SHALL display resources associated with that expectation when such resources exist.*
- [ ] **A - 19:** *WHEN an external resource is displayed, THE SYSTEM SHALL identify its source.*
- [ ] **A - 20:** *WHEN a user selects an available external resource, THE SYSTEM SHALL provide access to the original resource.*
- [ ] **A - 21:** *IF no relevant resource is found, THEN THE SYSTEM SHALL indicate that no matching resource was found.*
- [ ] **A - 22:** *WHEN a user's environment or situation changes, THE SYSTEM SHALL replace the displayed resources with resources associated with the new environment or situation.*
- [ ] **A - 23:** *WHEN a user chooses to view other experiences, THE SYSTEM SHALL display anonymous experiences associated with the user's selected environment or situation when such experiences exist.*
- [ ] **A - 24:** *WHEN a user submits an experience anonymously, THE SYSTEM SHALL not display the user's name with that experience.*
- [ ] **A - 25:** *WHEN anonymous experiences are displayed, THE SYSTEM SHALL identify the situation or environment associated with each experience when that information is available.*
- [ ] **A - 26:** *IF no anonymous experiences are associated with the user's selected environment or situation, THEN THE SYSTEM SHALL indicate that no matching experiences are currently available.*
- [ ] **A - 27:** *THE SYSTEM SHALL NOT display a leaderboard of users.*
- [ ] **A - 28:** *THE SYSTEM SHALL NOT assign a user a performance rank based on another user's performance.*
- [ ] **A - 29:** *WHEN a user views general expectations or resources, THE SYSTEM SHALL not require the user to provide identifying information.*
- [ ] **A - 30:** *WHEN a user submits an anonymous experience, THE SYSTEM SHALL not display personally identifying information with the experience.*

**Keep your dated Kano hypotheses and selected feature. Use IDs to connect evidence, jobs, and criteria. Clearly distinguish the one-feature HW3 implementation from the larger product scope.**

## Verification
| Criterion | Steps and input | Expected result | Observed result | Status | Evidence / commit |
|---|---|---|---|---|---|
| A - 12 | Enter goal/expectation, select status, and click "Add progress marker." | The system displays the marker in the user's in progress list. | The progress marker appeared in the In Progress list after submission. If I were to have selected Completed as the status, it would have populated there.| PASS | [commit/link] |
| A - 13 | Create a goal and select a status. | The system displays the selected status with the goal. | I selected Completed, and the goal displayed as completed. | PASS | [commit/link] |
| A - 14 | Select "Edit" on an existing goal, change the name, and select "Save." | The system displays the updated information. | The updated goal name appeared after saving. | PASS | [commit/link] |
| A - 15 | Select "Mark complete" on an in-progress goal. | The system displays the goal as completed. | The system shows the goal under the completed section.| PASS| [commit/link] |
| A - 16 | View the progress list containing multiple goals. | The system displays the user's progress without ranking it against another user's progress. | The page displayed the user's progress markers without rankings or comparisons to other users. | PASS | [commit/link] |
| A - 17 | Select "Delete" on an existing goal. | The system removes the goal from the user's progress list. | The selected goal was removed from the list. | PASS | [commit/link] |
| A - 27 | Review the progress page for rankings or leaderboards. | The system does not display a leaderboard of users. | The progress page does not display a leaderboard. | PASS | This is not applicable to my chosen feature because this was meant for dicussion/personalized content features. |
| A - 28 | Review the progress page for a performance ranking based on another user. | The system does not assign a user a performance rank based on another user's performance. | The progress page does not assign or display performance rankings. | PASS | [commit/link] |
| A - 29 | Open and use the general progress-tracking page without entering identifying information. | The system does not require identifying information. | I can create and view my exepctations/goals without providing identifying information. | PASS | [commit/link] |


| Criterion | Steps and input | Expected result | Observed result | Status | Evidence / commit |
|---|---|---|---|---|---|
| A - 01 | Open the program. | The system prompts the user to identify an environment and situation. | The current page opens directly to the progress-marker tracker and does not prompt the user to identify an environment or situation. | CANNOT TEST YET | [commit/link] |
| A - 02 | Select an environment. | The system allows the user to select or enter their current stage or situation. | The current page does not provide an environment-selection feature. | CANNOT TEST YET | [commit/link] |
| A - 03 | Provide an environment and situation. | Expectations and resources associated with the environment and situation are displayed. | The current page does not provide an environment or situation input or display expectations and resources. | CANNOT TEST YET | [commit/link] |
| A - 04 | Change the selected environment or situation. | The displayed expectations and resources are replaced with those associated with the new environment or situation. | The current page does not provide an environment or situation selection that can be changed. | CANNOT TEST YET | [commit/link] |
| A - 05 | Attempt to upload an external resource. | The system analyzes the resource to identify expectations for the selected environment. | The current page does not provide an external-resource upload feature. | CANNOT TEST YET | [commit/link] |
| A - 06 | Identify an environment. | The system displays expectations from an identified external source or uploaded materials. | The current page does not provide an environment-selection feature or display external expectations. | CANNOT TEST YET | [commit/link] |
| A - 07 | Display an expectation. | The system identifies the source of the expectation. | The current page does not display environment expectations or their sources. | CANNOT TEST YET | [commit/link] |
| A - 08 | Select an available source. | The system provides access to the original source. | The current page does not display external sources. | CANNOT TEST YET | [commit/link] |
| A - 09 | Provide a current stage or situation. | The system displays expectations identified for that stage or situation. | The current page does not provide a stage or situation input or display expectations. | CANNOT TEST YET | [commit/link] |
| A - 10 | View an expectation that cannot be supported by an identified external source. | The system indicates that the expectation could not be established. | The current page does not establish or display external expectations. | CANNOT TEST YET | [commit/link] |
| A - 11 | Attempt to display an unsupported expectation. | The system does not present an unsupported claim as an established expectation. | The current page does not establish or display environment expectations. | CANNOT TEST YET | [commit/link] |
| A - 18 | Identify an expectation that is not understood or has not been met. | The system displays associated resources when they exist. | The current page does not provide expectations or personalized resources. | CANNOT TEST YET | [commit/link] |
| A - 19 | Display an external resource. | The system identifies the resource's source. | The current page does not display external resources. | CANNOT TEST YET | [commit/link] |
| A - 20 | Select an available external resource. | The system provides access to the original resource. | The current page does not display external resources. | CANNOT TEST YET | [commit/link] |
| A - 21 | Search for a resource when no relevant resource exists. | The system indicates that no matching resource was found. | The current page does not provide a resource-search feature. | CANNOT TEST YET | [commit/link] |
| A - 22 | Change the user's environment or situation. | The system replaces the displayed resources with resources associated with the new environment or situation. | The current page does not provide environment or situation selection or personalized resources. | CANNOT TEST YET | [commit/link] |
| A - 23 | Choose to view other users' experiences. | The system displays anonymous experiences associated with the selected environment or situation when available. | The current page does not provide an anonymous-experience feature. | CANNOT TEST YET | [commit/link] |
| A - 24 | Submit an experience anonymously. | The system does not display the user's name with the experience. | The current page does not provide an experience-submission feature. | CANNOT TEST YET | [commit/link] |
| A - 25 | View anonymous experiences. | The system identifies the situation or environment associated with each experience when available. | The current page does not provide an anonymous-experience feature. | CANNOT TEST YET | [commit/link] |
| A - 30 | Submit an anonymous experience. | The system does not display personally identifying information with the experience. | The current page does not provide an anonymous-experience submission feature. | CANNOT TEST YET | [commit/link] |

Cover a normal action, relevant invalid input, and persistence or failure. Classify unselected requirements separately. Record actual outcomes; all-PASS is acceptable with evidence.
