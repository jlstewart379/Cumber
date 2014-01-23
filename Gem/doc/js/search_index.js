var search_data = {"index":{"searchIndex":["cumber","element","cumberserver","string","enabled?()","execute_step()","exists?()","format_command()","generate_response()","log()","new()","new_run()","parse_response()","path_to_driver()","process_bool_response()","process_string_response()","search_and_execute_command()","search_description()","send_command()","set_command()","set_response()","start()","start()","stop()","stop_instruments()","stop_server()","strip_special_chars()","tap()","to_bool()","value()","visible?()","wait_for_command()","wait_for_response()","driver.js","element.js","helper_methods.js","helpers.js"],"longSearchIndex":["cumber","cumber::element","cumberserver","string","cumber::element#enabled?()","cumber::execute_step()","cumber::element#exists?()","cumber::format_command()","cumberserver::generate_response()","cumberserver::log()","cumber::element::new()","cumber::new_run()","cumber::parse_response()","cumber::path_to_driver()","cumber::element#process_bool_response()","cumber::element#process_string_response()","cumber::element#search_and_execute_command()","cumber::element#search_description()","cumber::send_command()","cumberserver::set_command()","cumberserver::set_response()","cumber::start()","cumberserver::start()","cumber::stop()","cumber::stop_instruments()","cumber::stop_server()","cumber::strip_special_chars()","cumber::element#tap()","string#to_bool()","cumber::element#value()","cumber::element#visible?()","cumberserver::wait_for_command()","cumberserver::wait_for_response()","","","",""],"info":[["Cumber","","Cumber.html","","<p>Cumber is an automated testing tool that bridges the gap between cucumber\ntests and the Apple automated …\n"],["Cumber::Element","","Cumber/Element.html","","<p>This class is the wrapper for the generic UIAElement class. The UIAElement\nclass is the UIAutomation …\n"],["CumberServer","","CumberServer.html","","<p>Manages communication between UI Instruments and the Cumber Gem.\n"],["String","","String.html","","<p>An extension of the String Class to include some helper methods\n"],["enabled?","Cumber::Element","Cumber/Element.html#method-i-enabled-3F","()","<p>Checks the enabled stated of the object. <br>\n<p>Examples\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">element</span> = <span class=\"ruby-constant\">Cumber</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Element</span>.<span class=\"ruby-identifier\">new</span>(:<span class=\"ruby-identifier\">name</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">&quot;ElementSearch&quot;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["execute_step","Cumber","Cumber.html#method-c-execute_step","(step)","<p>Creates an instance of a Cumber Element to use as a base to query UI\nAutomation.\n<p>Parameters\n<p><code>step</code> - A string ...\n"],["exists?","Cumber::Element","Cumber/Element.html#method-i-exists-3F","()","<p>Checks the validity attribute and verifies the object exists. <br>\n<p>Examples\n\n<pre>element = Cumber::Element.new(:name ...</pre>\n"],["format_command","Cumber","Cumber.html#method-c-format_command","(command, status)","<p>Formats the string query that will be sent to UI Automation.\n<p>Parameters\n<p><code>command</code> - The string query to send ...\n"],["generate_response","CumberServer","CumberServer.html#method-c-generate_response","(client, message)","<p>Processes the Json data from the client request and returns the proper\nresponse.\n<p>Examples\n\n<pre>CumberServer.generate_response('/device', ...</pre>\n"],["log","CumberServer","CumberServer.html#method-c-log","(message)","<p>Logs information for debug mode. Commented out until verbose logging option\nis implemented\n<p>Examples\n\n<pre>CumberServer.log(&quot;&quot;)</pre>\n"],["new","Cumber::Element","Cumber/Element.html#method-c-new","(locator = {})","<p>Creates an instance of a Cumber Element to use as a base to query UI\nAutomation.\n<p>Parameters\n<p><code>locator</code> -  ...\n"],["new_run","Cumber","Cumber.html#method-c-new_run","(udid, target, trace_path)","<p>Closes the app and prepares the tablet for the next scenario. <br>\n<p>Parameters\n<p><code>udid</code> - The unique identifier ...\n"],["parse_response","Cumber","Cumber.html#method-c-parse_response","(response)","<p>Parses through the response from send_command and returns the portion of\nthe resulting value of the executed …\n"],["path_to_driver","Cumber","Cumber.html#method-c-path_to_driver","()","<p>Returns the path to the Cumber instruments driver file. <br>\n<p>Examples\n\n<pre>Cumber.path_to_driver</pre>\n"],["process_bool_response","Cumber::Element","Cumber/Element.html#method-i-process_bool_response","(response)","<p>Processes the result for a boolean return. Returns the boolean or nil if\nthere was an error.\n<p>Parameters …\n"],["process_string_response","Cumber::Element","Cumber/Element.html#method-i-process_string_response","(response)","<p>Processes the result for a string return. Returns the string or nil if\nthere was an error.\n<p>Parameters …\n"],["search_and_execute_command","Cumber::Element","Cumber/Element.html#method-i-search_and_execute_command","(command)","<p>Appends the command to execute on the located object and returns the\nresponse.\n<p>Parameters\n<p><code>command</code> - The ...\n"],["search_description","Cumber::Element","Cumber/Element.html#method-i-search_description","()","<p>Returns the locator string to find the specified object based on the set\nlocators.\n"],["send_command","Cumber","Cumber.html#method-c-send_command","(command, status)","<p>Formats and sends the string query to UI Automation. and returns the\nresponse\n<p>Parameters\n<p><code>command</code> - The ...\n"],["set_command","CumberServer","CumberServer.html#method-c-set_command","(message)","<p>Processes the data response from the Cumber Gem client.\n<p>Examples\n\n<pre>CumberServer.set_command('{&quot;message&quot;:&quot;&quot;, ...</pre>\n"],["set_response","CumberServer","CumberServer.html#method-c-set_response","(message)","<p>Processes the data response from the instruments driver client.\n<p>Examples\n\n<pre>CumberServer.set_response('{&quot;message&quot;:&quot;&quot;, ...</pre>\n"],["start","Cumber","Cumber.html#method-c-start","()","<p>Starts the Cumber Server. Needs to be called once at the begging of a\nCucumber run. <br>\n<p>Examples\n\n<pre>#Place in ...</pre>\n"],["start","CumberServer","CumberServer.html#method-c-start","()","<p>Starts the running Cumber server on localhost:8080.\n<p>Examples\n\n<pre>CumberServer.start</pre>\n"],["stop","Cumber","Cumber.html#method-c-stop","()","<p>Stops the Cumber Server and the current instruments run. Needs to be called\nat the end of a Cucumber …\n"],["stop_instruments","Cumber","Cumber.html#method-c-stop_instruments","()","<p>Stops instruments before starting a new run. <br>\n<p>Examples\n\n<pre>Cumber.stop_instruments</pre>\n"],["stop_server","Cumber","Cumber.html#method-c-stop_server","()","<p>Stops the Cumber Server <br>\n<p>Examples\n\n<pre>Cumber.stop_server</pre>\n"],["strip_special_chars","Cumber","Cumber.html#method-c-strip_special_chars","(command)","<p>Replaces special characters in the string query with modified HTML codes\nfor the characters ‘&amp;’, …\n"],["tap","Cumber::Element","Cumber/Element.html#method-i-tap","()","<p>Simulate a user tapping on the UIAElement. <br>\n<p>Examples\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">element</span> = <span class=\"ruby-constant\">Cumber</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Element</span>.<span class=\"ruby-identifier\">new</span>(:<span class=\"ruby-identifier\">name</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">&quot;ElementSearch&quot;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["to_bool","String","String.html#method-i-to_bool","()","<p>Converts the string value of “true” to a boolean true and all other strings\nto false (case …\n"],["value","Cumber::Element","Cumber/Element.html#method-i-value","()","<p>Returns the value attribute for the specified Element. <br>\n<p>Examples\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">element</span> = <span class=\"ruby-constant\">Cumber</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Element</span>.<span class=\"ruby-identifier\">new</span>(:<span class=\"ruby-identifier\">name</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["visible?","Cumber::Element","Cumber/Element.html#method-i-visible-3F","()","<p>Checks the visibility stated of the object. <br>\n<p>Examples\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">element</span> = <span class=\"ruby-constant\">Cumber</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Element</span>.<span class=\"ruby-identifier\">new</span>(:<span class=\"ruby-identifier\">name</span> =<span class=\"ruby-operator\">&gt;</span> <span class=\"ruby-string\">&quot;ElementSearch&quot;</span>) <span class=\"ruby-operator\">...</span>\n</pre>\n"],["wait_for_command","CumberServer","CumberServer.html#method-c-wait_for_command","()","<p>Delays the response to the device until a command comes in.\n<p>Examples\n\n<pre>CumberServer.wait_for_command</pre>\n"],["wait_for_response","CumberServer","CumberServer.html#method-c-wait_for_response","()","<p>Delays the response to the cumber gem client until a response comes in.\n<p>Examples\n\n<pre>CumberServer.wait_for_response</pre>\n"],["driver.js","","lib/cumber/driver/driver_js.html","","<p>#import “driver_helpers/helpers.js”\n<p>//automation globals var target = UIATarget.localTarget() …\n"],["element.js","","lib/cumber/driver/driver_helpers/element_js.html","","<p>//UIAElement.prototype[“logDebug”] = function() //{ //};\n"],["helper_methods.js","","lib/cumber/driver/driver_helpers/helper_methods_js.html","","<p>function searchWithPredicate(predicate, startElement) {\n\n<pre>function recursiveSearch(predicate, startElement) ...</pre>\n"],["helpers.js","","lib/cumber/driver/driver_helpers/helpers_js.html","","<p>import “helper_methods.js” import “element.js”\n"]]}}