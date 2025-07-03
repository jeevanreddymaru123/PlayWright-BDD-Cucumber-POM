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

        stage('Publish Cucumber Report') {
            steps {
                publishHTML([
                    reportDir: 'reports',
                    reportFiles: 'cucumber-report.html',
                    reportName: 'BDD Report - multiple-cucumber.html',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    
    }
     
 }

