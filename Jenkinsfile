pipeline {
    agent any

    environment {
        IMAGE_NAME = "web-profile"
        CONTAINER_NAME = "web-profile-app"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        HOST_PORT = "3001"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy') {
            steps {
                script {
                    sh """
                    echo "Membangun image Docker baru dengan tag \${IMAGE_TAG}..."
                    docker build -t \${IMAGE_NAME}:\${IMAGE_TAG} .
                    
                    echo "Menghentikan dan menghapus container versi sebelumnya (jika ada)..."
                    docker rm -f \${CONTAINER_NAME} || true
                    
                    echo "Menjalankan container baru..."
                    docker run -d \
                        --name \${CONTAINER_NAME} \
                        -p \${HOST_PORT}:80 \
                        --restart unless-stopped \
                        \${IMAGE_NAME}:\${IMAGE_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                sh "docker image prune -f || true"
            }
        }
        success {
            echo "Deployment berhasil! Aplikasi Astro berjalan di background pada port ${HOST_PORT}."
        }
        failure {
            echo "Pipeline gagal. Silakan cek log Jenkins untuk detail error."
        }
    }
}