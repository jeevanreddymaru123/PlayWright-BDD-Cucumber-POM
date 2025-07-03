pipeline {
    agent any

    tools {
        git 'Git Default'   // Match the name set in Global Tool Config
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright install'
                bat 'npm run test'
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npm run report'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'reports',
                    reportFiles: 'cucumber-report.html',
                    reportName: 'Cucumber Test Report'
                ])
            }
        }
    }
}
