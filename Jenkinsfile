pipeline {
    agent any

      stages {
        stage('Install and Test'){
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
                bat 'npm run test'
                bat 'npm run report'
            }
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

