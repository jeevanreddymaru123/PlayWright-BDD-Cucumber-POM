pipeline {
    agent any

    tools {
        git 'GitInstalled'   // Match the name set in Global Tool Config
    }

    stages {
        stage('Install & Test){
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
}
