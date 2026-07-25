====================================================================================================================================================
Bug ID | Module | Bug Title | Description | Steps to Reproduce | Expected Result | Actual Result | Severity | Priority | Status
====================================================================================================================================================

BUG001 | Dashboard | Search crashes application | Dashboard crashes while searching because contact field is not converted properly. | Login → Dashboard → Type in Search | Search results should display | Blank page displayed with TypeError | Critical | High | Fixed

BUG002 | Dashboard | Contact search error | station.contact.toLowerCase() throws error when contact is numeric. | Search using contact number | Search should work | Application crashes | Critical | High | Fixed

BUG003 | Admin Dashboard | Charts overflow page | Admin dashboard charts extend beyond page width. | Open Admin Dashboard | Charts should fit inside page | Charts overflow horizontally | Medium | Medium | Fixed

BUG004 | Station Card | Duplicate Status field | Station card displays Status twice. | Open Dashboard | Status should appear once | Status displayed twice | Low | Low | Fixed

BUG005 | Dashboard | No search results message missing | Search with invalid keyword previously showed blank page. | Search invalid station | Display "No Fuel Stations Found" | Blank page shown | Medium | Medium | Fixed

BUG006 | Map | Location permission denied handling | Location permission denial message was unclear. | Block browser location | Proper error message should display | Generic message displayed | Low | Medium | Fixed

BUG007 | Dashboard | Station contact data type mismatch | Contact stored as number instead of string caused search failure. | Search by contact | Search should work | TypeError generated | High | High | Fixed

BUG008 | Admin Dashboard | Pie chart size imbalance | Pie chart appeared very small compared to bar chart. | Open Admin Dashboard | Charts should have balanced size | Pie chart significantly smaller | Low | Low | Fixed

BUG009 | Dashboard | Search refresh issue | Dashboard disappeared while typing until page refresh. | Type in search field | Dashboard should remain visible | Dashboard disappeared | Critical | High | Fixed

BUG010 | CSV Export | CSV validation | CSV downloaded successfully but content validation pending due to unavailable spreadsheet software. | Click Export CSV | CSV should download with correct data | File downloaded successfully | Low | Low | Passed

====================================================================================================================================================