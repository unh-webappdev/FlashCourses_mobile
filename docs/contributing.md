## Contributing to FlashCourses

#### Local development

* Fork one of our repositories and make your own local repository
* Develop code locally then make a pull request (see below)
* Follow GitFlow Workflow for development. (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
** Please see the Git Branching Model included at the end of this document for a visual on how to use supporting branches beyond master and develop. We will NOT be making any hotfix or release branches, as this level of branching is more appropriate for a more complex and further developed project. 

### Pull Requests

* Fill in the pull request template
* Do not include issue numbers in the pull request title
* Include screenshots in your pull request when possible
* Follow the JavaScript style guides
* Document new code based on the Documentation Style Guide below
* End all files with a newline
* Avoid platform-dependent code

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Commits to the upstream repository MUST have meaningful comments. Someone unfamiliar with this project should be able to follow a narrative regarding its developmental progress from the commit messages. 

### Coding Commandments
* All coding submissions should pass unit testing before submitting code for revision prior to being added to the source code.
* No code included in your submissions should be ‘commented out’ unless there is an explicit, beneficial purpose for doing so, such as allowing for easy toggling of a feature. Final determinations on appropriateness of such code will be made the by version control team.
* DO NOT MODIFY code submitted by other teams without consulting with them regarding said changes.

### Python Style Guide
* All Python must adhere to [PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/).
* All Python must adhere to [PEP 257 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/).
** Do take advantage of the pycodestyle and autopep8 packages; install with pip (or pip3)

### JavaScript Style Guide

* All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```

### Documentation Style Guide

* Use Python Style Guidelines (Pycodestyle) http://docs.python-guide.org/en/latest/writing/style/
* Use snake_case for naming functions in Python
* Use tabs set to 4 spaces
* Limit lines of code to 78 characters
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`
