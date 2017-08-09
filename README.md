<h1>Simple SPA chat with Re-frame+MaterialUI frontend, Ring, Aleph+MySQL backend</h1>
<p>(interview project)</p>
<h2>Core stack</h2>
<ul>
<li>Re-frame</li>
<li>Aleph</li>
<li>MaterialUI</li>
<li>Reagent</li>
<li>MySQL</li>
<li>Luminus template</li>
<li>Leiningen</li>
</ul>
<h2>Development plugins used</h2>
<ul>
<li>Figwheel</li>
</ul>
<h2>Features/design</h2>
<ul>
<li>Simple merged sign in/sign up, passwords saved/compared in md5, basic cookie is issued for submitting chats and udping user online status to the server</li>
<li>Basic chat functionality with timestamp</li>
<li>Core cljs functions are in /src/cljs/spachat/core.cljs: reagent templates, init functions, some custom js functionality </li>
<li>Re-frame dispatchers and subscribers are in /src/cljs/spachat/events.cljs: ajax requests to the backend are divided into [ajax request dispatcher-ajax OK response dispatcher-ajax error handler response dispatcher]</li>
<li>Backend listens on 4 <code>API/</code> endpoints, defined in /src/clj/spachat/routes/home.clj</li> 
<li>10s interval pinging for new messages and submitting last_seen stamp to the server for authorised user</li>
<li>XSS are by default filtered with reagent</li>
<li>Validation not implemented</li>
</ul>
<h2>Start app - development</h2>
<p>Tested with Debian, OpenJDK8 (Leiningen 2.8.1 on Java 1.8.0_181 OpenJDK 64-Bit Server VM)</p>
<p>System dependencies: mysql-server, leiningen</p>
<p>To launch the app, go to project root then </p>
<ul>
<li>1. Supply a db link as env var <code>(export databaseurl="mysql://localhost:3306/XXXXX?user=XXXXX&password=XXXXX")</code> or uncomment and edit this var in /dev-config.edn</li>
<li>2. 1st terminal: <code>lein run</code> will start the backend server on :3000</li>
<li>3. 2nd terminal:  <code>lein figwheel</code> will start ClojureScript autocompile and REPL</li>
</ul>
<h2>Start app - uberjar</h2>
<p>Tested with Debian, OpenJDK8 (Leiningen 2.8.1 on Java 1.8.0_181 OpenJDK 64-Bit Server VM)</p>
<p>System dependencies: mysql-server, leiningen</p>
<p>To launch the app, go to project root then </p>
<ul>
<li>1. <code>lein uberjar</code></li>
<li>2. Go to /target/uberjar/spachat.jar to find your uberjar</li>
<li>3. Supply a db link as env var in your shell - <code>databaseurl="mysql://localhost:3306/XXXXX?user=XXXXX&password=XXXXX"</code></li>
<li>4. Start uberjar with <code>java -jar spachat.jar</code> </li>
</ul>

In both cases the app will be launched at http://127.0.0.1:3000/






