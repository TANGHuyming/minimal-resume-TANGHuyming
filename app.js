require('dotenv').config();
const express = require('express')
const path = require('path')
const handlebarsEngine = require('express-handlebars')

const PORT = process.env.PORT || 3000
const app = express()

app.engine('handlebars', handlebarsEngine.engine(
    {
        defaultLayout: 'main',
        helpers: {
            section: function (name, options) {
                if (!this._sections) this._sections = {}
                this._sections[name] = options.fn(this)
                return null
            }
        }
    }
))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const context = {
        "title": "Professional Resume",
        "name": "Alex Morgan",
        "email": "alex.morgan.synthetic@example.com",
        "telephone": "+1 (555) 987-6543",
        "skills": "Full Stack (React, Node.js, Express, MongoDB)",
        "experiences": [
            {
                "name": "Aurora Tech Solutions",
                "role": "Senior Software Engineer",
                "description": "Led a team of 5 to design and build scalable web applications, improved CI/CD pipeline, and reduced deployment time by 40%.",
                "from": "2019-07-01",
                "to": "2023-09-30"
            },
            {
                "name": "Nimbus Web",
                "role": "Software Engineer",
                "description": "Implemented core features for the customer dashboard, optimized database queries, and increased frontend performance.",
                "from": "2016-03-01",
                "to": "2019-06-30"
            },
            {
                "name": "BrightByte Labs",
                "role": "Junior Developer",
                "description": "Contributed to multiple client projects, wrote unit and integration tests, and participated in architecture reviews.",
                "from": "2014-08-01",
                "to": "2016-02-28"
            }
        ],
        "educations": [
            {
                "name": "State University",
                "description": "B.Sc. in Computer Science — focus on software engineering and distributed systems.",
                "from": "2010-09-01",
                "to": "2014-06-30"
            },
            {
                "name": "Advanced Web Bootcamp",
                "description": "Intensive full-stack web development program covering modern JS frameworks and deployment.",
                "from": "2015-01-10",
                "to": "2015-04-20"
            },
            {
                "name": "Cloud Architecture Certificate",
                "description": "Professional certificate in cloud-native architecture and DevOps practices.",
                "from": "2021-05-01",
                "to": "2021-11-30"
            }
        ],
        "projects": [
            {
                "name": "TeamFlow",
                "description": "A collaboration platform that supports real-time editing, task management, and analytics. Built with React, Node.js, and WebSocket for live sync.",
                "from": "2022-01-01",
                "to": "2022-12-01"
            },
            {
                "name": "InsightDash",
                "description": "Analytics dashboard for monitoring application performance and user behavior; implemented ETL pipelines and interactive visualizations.",
                "from": "2020-02-01",
                "to": "2021-08-31"
            },
            {
                "name": "OpenCatalog API",
                "description": "Public REST API for product catalog search with full-text indexing and pagination; designed for high availability.",
                "from": "2018-05-01",
                "to": "2019-01-31"
            }
        ],
        "isWorking": true,
        "isLookingForJob": false
    }

    res.render('home', context)
})

app.listen(PORT, () => console.log("Server started on port ", PORT))