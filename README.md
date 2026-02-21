<h1>Production Docker Microservices System</h1> <h2>Overview</h2> <p> This project demonstrates a production-ready microservices architecture using Docker and Docker Compose. It includes a reverse proxy (Nginx), a Node.js API service, a background worker service, and MongoDB for persistent storage. </p> <h2>Architecture</h2> <pre><code> Client | v Nginx (Reverse Proxy) | v API Service (Node.js) | v MongoDB | v Worker Service </code></pre> <h2>Key Features</h2> <ul> <li>Multi-container architecture</li> <li>Reverse proxy using Nginx</li> <li>MongoDB with persistent volume</li> <li>Multi-stage Docker builds</li> <li>Non-root container security</li> <li>Healthchecks for service monitoring</li> <li>Environment-based configuration</li> <li>Horizontal scaling support</li> </ul> <h2>Project Structure</h2> <pre><code> docker-prod-microservices/ │ ├── api/ ├── worker/ ├── nginx/ ├── .env └── docker-compose.yml </code></pre> <h2>Technologies Used</h2> <ul> <li>Node.js (API & Worker)</li> <li>MongoDB</li> <li>Nginx</li> <li>Docker</li> <li>Docker Compose</li> </ul> <h2>Prerequisites</h2> <ul> <li>Docker installed</li> <li>Docker Compose enabled</li> </ul>

Verify installation:

<pre><code> docker --version docker compose version </code></pre> <h2>Environment Configuration</h2> <p>The application uses environment variables defined in the <code>.env</code> file.</p>

Example:

<pre><code> MONGO_URI=mongodb://mongo:27017/microdb NODE_ENV=production </code></pre> <h2>Build and Run the Application</h2> <p>From the root directory:</p> <pre><code> docker compose up --build </code></pre> <p>Access the application:</p> <pre><code> http://localhost </code></pre> <h2>API Endpoints</h2> <h3>Health Check</h3> <pre><code> GET /health </code></pre> <h3>Root Endpoint</h3> <pre><code> GET / </code></pre> <h3>Create Job</h3> <pre><code> POST /jobs Content-Type: application/json { "task": "Example task" } </code></pre>

Example using curl:

<pre><code> curl -X POST http://localhost/jobs \ -H "Content-Type: application/json" \ -d '{"task":"Learn Docker Production"}' </code></pre> <h3>Get All Jobs</h3> <pre><code> GET /jobs </code></pre> <h2>Scaling the API Service</h2> <p>You can scale the API horizontally:</p> <pre><code> docker compose up --scale api=3 </code></pre>

This will:

<ul> <li>Run three API containers</li> <li>Allow Nginx to distribute traffic</li> </ul> <h2>View Logs</h2>

View logs for all services:

<pre><code> docker compose logs </code></pre>

View worker logs:

<pre><code> docker compose logs worker </code></pre> <h2>Stop the Application</h2> <pre><code> docker compose down </code></pre>

Remove volumes (including database data):

<pre><code> docker compose down -v </code></pre> <h2>Production Best Practices Implemented</h2> <ul> <li>Non-root container execution</li> <li>Multi-stage Docker builds</li> <li>Healthcheck configuration</li> <li>Restart policies</li> <li>Persistent database storage</li> <li>Environment variable configuration</li> <li>Service isolation via Docker network</li> </ul> <h2>Image Versioning Strategy</h2>

Avoid using <code>latest</code> in production.

Recommended tagging:

<pre><code> username/app:1.0.0 username/app:1.0.1 username/app:staging username/app:production </code></pre> <h2>Deployment Readiness</h2>

This project is ready for:

<ul> <li>Kubernetes migration</li> <li>AWS ECS deployment</li> <li>CI/CD integration (GitHub Actions)</li> <li>Cloud-based container orchestration</li> </ul> <h2>Conclusion</h2> <p> This project demonstrates real-world containerized microservices architecture with production-level Docker practices. It is suitable for DevOps portfolios, interviews, and cloud deployment extensions. </p>
