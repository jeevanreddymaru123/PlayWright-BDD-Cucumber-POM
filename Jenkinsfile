pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/jeevanreddymaru123/Insights-App-Playwright-Cucumber-POM.git'
            }
        }

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
