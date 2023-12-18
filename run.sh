# No dependencies need to be installed for this codebase as it's a simple static HTML/CSS/JS project.
# To run the codebase, you can use a simple static server. One common tool for this is `python3 -m http.server`.
# If Python 3 is not installed, you can use another static server package like `serve` which can be installed via npm.

# First, check if npm is available and install `serve` locally (not globally)
npm --version
npm install serve

# After installing `serve`, you can run it to serve the current directory on a port (e.g., 8000)
npx serve -s . -l 8000

# The `-s` flag is for serving static sites and `-l` specifies the port.
# Now, you can open your web browser and go to http://localhost:8000 to view the project.
