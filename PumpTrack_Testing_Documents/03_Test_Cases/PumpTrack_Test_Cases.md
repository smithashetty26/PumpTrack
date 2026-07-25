TC ID | Module | Test Case | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status
---------------------------------------------------------------------------------------------------------------
TC001 | Registration | Verify registration with valid details

Preconditions:
Application is running.

Test Steps:
1. Open Register page.
2. Enter valid name.
3. Enter valid email.
4. Enter valid password.
5. Click Register.

Test Data:
Name: Smitha
Email: smitha@gmail.com
Password: Smith@123

Expected Result:
User account should be created successfully.

Actual Result:
User account created successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC002 | Registration | Verify registration using existing email

Preconditions:
User already exists.

Test Steps:
1. Open Register page.
2. Enter existing email.
3. Enter password.
4. Click Register.

Test Data:
smitha@gmail.com

Expected Result:
Application should display "Email already exists."

Actual Result:
Email already exists message displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC003 | Registration | Verify registration with empty fields

Preconditions:
Application is running.

Test Steps:
1. Open Register page.
2. Leave all fields blank.
3. Click Register.

Test Data:
Blank

Expected Result:
Validation messages should appear.

Actual Result:
Validation displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC004 | Login | Verify login with valid credentials

Preconditions:
User is registered.

Test Steps:
1. Open Login page.
2. Enter valid email.
3. Enter password.
4. Click Login.

Test Data:
smitha@gmail.com
Smith@123

Expected Result:
Dashboard should open.

Actual Result:
Dashboard opened.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC005 | Login | Verify login with invalid password

Preconditions:
Registered user.

Test Steps:
1. Enter valid email.
2. Enter wrong password.
3. Click Login.

Expected Result:
Invalid password error.

Actual Result:
Error displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC006 | Login | Verify login with empty fields

Preconditions:
Application running.

Test Steps:
1. Open Login.
2. Leave fields blank.
3. Click Login.

Expected Result:
Validation message displayed.

Actual Result:
Validation displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC007 | Logout | Verify Logout

Preconditions:
User logged in.

Test Steps:
1. Click Logout.

Expected Result:
Redirect to Login page.

Actual Result:
Redirected successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC008 | Dashboard | Verify Dashboard loads

Preconditions:
User logged in.

Test Steps:
1. Login.
2. Open Dashboard.

Expected Result:
Dashboard loads successfully.

Actual Result:
Dashboard displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC009 | Dashboard | Verify Search by Station Name

Preconditions:
Dashboard loaded.

Test Steps:
1. Enter station name.
2. Observe results.

Expected Result:
Matching stations displayed.

Actual Result:
Matching stations displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC010 | Dashboard | Verify Search by Address

Preconditions:
Dashboard loaded.

Test Steps:
1. Enter address.
2. Observe results.

Expected Result:
Matching stations displayed.

Actual Result:
Matching stations displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------
TC011 | Dashboard | Verify Search using Contact Number

Preconditions:
Dashboard is loaded.

Test Steps:
1. Enter a contact number in the search box.
2. Observe the station list.

Test Data:
9876543210

Expected Result:
Matching station should be displayed.

Actual Result:
Matching station displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC012 | Dashboard | Verify Search with Invalid Keyword

Preconditions:
Dashboard is loaded.

Test Steps:
1. Enter "XYZABC123".
2. Observe results.

Test Data:
XYZABC123

Expected Result:
"No Fuel Stations Found" message should be displayed.

Actual Result:
No Fuel Stations Found displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC013 | Dashboard | Verify Empty Search

Preconditions:
Dashboard loaded.

Test Steps:
1. Keep search box empty.

Expected Result:
All stations should be displayed.

Actual Result:
All stations displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC014 | Station Details | Verify Station Details Page Opens

Preconditions:
Dashboard loaded.

Test Steps:
1. Click "View Details" for any station.

Expected Result:
Station Details page opens.

Actual Result:
Station Details page opened.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC015 | Station Details | Verify Fuel Availability Display

Preconditions:
Station Details page opened.

Test Steps:
1. Observe Petrol, Diesel and CNG badges.

Expected Result:
Correct fuel availability should be displayed.

Actual Result:
Fuel availability displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC016 | Station Details | Verify Queue Status Display

Preconditions:
Station Details page opened.

Test Steps:
1. Observe Queue Status.

Expected Result:
Queue status should display Low, Medium or High.

Actual Result:
Queue status displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC017 | Station Details | Verify Station Contact Information

Preconditions:
Station Details page opened.

Test Steps:
1. Verify contact number.

Expected Result:
Correct contact number displayed.

Actual Result:
Correct contact displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC018 | Map | Verify User Location Detection

Preconditions:
Location permission enabled.

Test Steps:
1. Open Map page.
2. Allow browser location permission.

Expected Result:
Current user location should be displayed.

Actual Result:
Current location displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC019 | Map | Verify Nearest Fuel Stations

Preconditions:
Location detected.

Test Steps:
1. Open Map page.

Expected Result:
Stations should be sorted by nearest distance.

Actual Result:
Nearest stations displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC020 | Map | Verify Google Maps Navigation

Preconditions:
Map page loaded.

Test Steps:
1. Click "Open in Google Maps".

Expected Result:
Google Maps should open with selected station.

Actual Result:
Google Maps opened successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------
TC021 | Profile | Verify Profile Page Loads

Preconditions:
User is logged in.

Test Steps:
1. Click Profile from the navigation bar.

Expected Result:
Profile page should open successfully.

Actual Result:
Profile page opened successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC022 | Profile | Verify User Information Display

Preconditions:
Profile page is opened.

Test Steps:
1. Observe user details such as Name and Email.

Expected Result:
Correct user information should be displayed.

Actual Result:
Correct information displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC023 | Admin | Verify Admin Dashboard Loads

Preconditions:
Admin user is logged in.

Test Steps:
1. Open Admin Dashboard.

Expected Result:
Admin Dashboard should load successfully.

Actual Result:
Dashboard loaded successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC024 | Admin | Verify Statistics Cards Display

Preconditions:
Admin Dashboard opened.

Test Steps:
1. Observe dashboard statistics.

Expected Result:
Total Stations, Open Stations, Closed Stations and other statistics should be displayed.

Actual Result:
Statistics displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC025 | Admin | Verify Add New Fuel Station

Preconditions:
Admin Dashboard opened.

Test Steps:
1. Click Add Station.
2. Enter valid station information.
3. Click Save.

Test Data:
Station Name: HP Panvel
Status: Open

Expected Result:
New station should be added successfully.

Actual Result:
Station added successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC026 | Admin | Verify Edit Fuel Station

Preconditions:
Station already exists.

Test Steps:
1. Click Edit.
2. Modify station information.
3. Save changes.

Expected Result:
Station information should be updated.

Actual Result:
Station updated successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC027 | Admin | Verify Delete Fuel Station

Preconditions:
Station exists.

Test Steps:
1. Click Delete.
2. Confirm deletion.

Expected Result:
Selected station should be deleted.

Actual Result:
Station deleted successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC028 | Admin | Verify CSV Export

Preconditions:
Admin Dashboard loaded.

Test Steps:
1. Click Export CSV.

Expected Result:
CSV file should be downloaded successfully.

Actual Result:
CSV downloaded successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC029 | Admin | Verify Newly Added Station Appears on Dashboard

Preconditions:
Admin has added a new station.

Test Steps:
1. Open Dashboard.

Expected Result:
Newly added station should be visible.

Actual Result:
Station displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC030 | Admin | Verify Updated Station Details Reflect on Dashboard

Preconditions:
Admin has edited a station.

Test Steps:
1. Open Dashboard.
2. Search the updated station.

Expected Result:
Updated information should be displayed.

Actual Result:
Updated information displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------
TC031 | Dashboard | Verify Search is Case Insensitive

Preconditions:
Dashboard is loaded.

Test Steps:
1. Enter station name in lowercase.
2. Enter the same station name in uppercase.

Expected Result:
Search should return the same matching station regardless of letter case.

Actual Result:
Search works correctly for different letter cases.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC032 | Dashboard | Verify Search with Special Characters

Preconditions:
Dashboard is loaded.

Test Steps:
1. Enter @#$%^&* in the search box.

Expected Result:
No application crash should occur.
"No Fuel Stations Found" message should be displayed.

Actual Result:
Application handled invalid input correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC033 | Dashboard | Verify Station Card Information

Preconditions:
Dashboard loaded.

Test Steps:
1. Observe each station card.

Expected Result:
Station Name, Address, Status, Queue, Contact, Fuel Availability and Last Updated should be displayed.

Actual Result:
All information displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC034 | Map | Verify Location Permission Allowed

Preconditions:
Browser asks for location permission.

Test Steps:
1. Click Allow.

Expected Result:
Current location should be displayed.

Actual Result:
Current location displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC035 | Map | Verify Location Permission Denied

Preconditions:
Browser asks for location permission.

Test Steps:
1. Click Block.

Expected Result:
Application should display an appropriate error message.

Actual Result:
Location permission denied message displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC036 | Map | Verify Distance Calculation

Preconditions:
Location detected.

Test Steps:
1. Open Map page.
2. Observe calculated distance.

Expected Result:
Distance should be displayed in kilometers.

Actual Result:
Distance displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC037 | Navigation | Verify Navbar Links

Preconditions:
User logged in.

Test Steps:
1. Click Dashboard.
2. Click Map.
3. Click Profile.
4. Click Admin.

Expected Result:
Each page should open correctly.

Actual Result:
Navigation works correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC038 | Navigation | Verify Footer Display

Preconditions:
Any page opened.

Test Steps:
1. Scroll to the bottom.

Expected Result:
Footer should be displayed properly.

Actual Result:
Footer displayed correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC039 | Responsive UI | Verify Mobile View

Preconditions:
Application opened.

Test Steps:
1. Open browser Developer Tools.
2. Switch to Mobile View.

Expected Result:
Application should adjust without layout issues.

Actual Result:
Responsive layout works correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC040 | Error Handling | Verify Invalid URL

Preconditions:
Application running.

Test Steps:
1. Enter an invalid URL such as /abcxyz.

Expected Result:
404 Not Found page should be displayed.

Actual Result:
Not Found page displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------
TC041 | Login | Verify Login with Invalid Email Format

Preconditions:
Application is running.

Test Steps:
1. Open Login page.
2. Enter an invalid email format.
3. Enter any password.
4. Click Login.

Test Data:
abc123

Expected Result:
Application should display "Invalid Email Format".

Actual Result:
Validation message displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC042 | Registration | Verify Password Length Validation

Preconditions:
Application is running.

Test Steps:
1. Open Registration page.
2. Enter valid name and email.
3. Enter a password with less than 6 characters.
4. Click Register.

Expected Result:
Password validation message should be displayed.

Actual Result:
Validation displayed successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC043 | Dashboard | Verify Station List After Login

Preconditions:
User logged in.

Test Steps:
1. Login.
2. Open Dashboard.

Expected Result:
Fuel station list should load successfully.

Actual Result:
Station list displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC044 | Profile | Verify User Email Display

Preconditions:
User logged in.

Test Steps:
1. Open Profile page.

Expected Result:
Logged-in user's email should be displayed.

Actual Result:
Correct email displayed.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC045 | Security | Verify Unauthorized Access to Admin Page

Preconditions:
Normal user logged in.

Test Steps:
1. Try opening Admin page directly.

Expected Result:
Access should be denied or redirected.

Actual Result:
Unauthorized access prevented.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC046 | Session | Verify Session Persistence

Preconditions:
User logged in.

Test Steps:
1. Login.
2. Refresh browser.

Expected Result:
User should remain logged in.

Actual Result:
Session maintained successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC047 | Browser Compatibility | Verify Application in Google Chrome

Preconditions:
Application deployed.

Test Steps:
1. Open application in Google Chrome.

Expected Result:
All features should work correctly.

Actual Result:
Application works correctly.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC048 | Performance | Verify Dashboard Loading Time

Preconditions:
Application running.

Test Steps:
1. Login.
2. Open Dashboard.

Expected Result:
Dashboard should load within an acceptable time.

Actual Result:
Dashboard loaded successfully.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC049 | Error Handling | Verify Internet Connection Loss

Preconditions:
Application running.

Test Steps:
1. Disconnect internet.
2. Refresh application.

Expected Result:
Appropriate error message should be displayed.

Actual Result:
Application handled network error appropriately.

Status:
PASS
---------------------------------------------------------------------------------------------------------------

TC050 | Logout | Verify Session Ends After Logout

Preconditions:
User logged in.

Test Steps:
1. Click Logout.
2. Press browser Back button.

Expected Result:
Dashboard should not be accessible without logging in again.

Actual Result:
User redirected to Login page.

Status:
PASS
---------------------------------------------------------------------------------------------------------------