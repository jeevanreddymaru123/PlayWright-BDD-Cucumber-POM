pipeline {
    agent any

    tools {
        git 'Git Default'   // Match the name set in Global Tool Config
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install'
                sh 'npm run test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report'
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
