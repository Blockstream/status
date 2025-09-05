# Status

This repository is what sits behind <https://status.blockstream.com>!

## Usage

Issues with particular labels are what we use to control what is shown on the status page.
There is a ~10 minute cache between updating an issue and it showing on the status page.

### Components

* label with `component` and `issue status`, and select a particular status:
  * `operational`
  * `degraded performance`
  * `partial outage`
  * `major outage`

### Incidents

* label with `incident` and `issue status`, and optionally `maintenance` if it is scheduled.
