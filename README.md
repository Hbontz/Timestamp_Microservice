# Timestamp_Microservice

### Usage

Pass a string as a parameter to this page's URL by appending a natural language date or a Unix timestamp. If the string passed is valid, a natural language date and Unix timestamp will be returned. If the string passed is invalid, null will be returned for both properties.

### Example Input

A valid natural language date consists of a numeric day of the month and an English language month (standard abbreviations accepted) in any order followed by the 4 digit year. The Unix time can be positive or negative.

#### Natural Language Date

*[http://localhost:8080/Sep 08 2001](http://localhost:8080/September%208,%202001)*

#### Unix Time

*[http://localhost:8080/1000000000](http://localhost:8080/1000000000)*

### Example Output

{"unix": 1000000000, "natural": "September 8th, 2001"}
{"unix": null, "natural": null}
