node{
	checkout scm

	docker.image('node:9.11-alpine').inside('-p 3000:3000'){c ->
		stage('build'){ 
			sh 'yarn'
		}
		stage('Test'){
			sh 'env CI=true yarn test'
		}
		stage('Deploy'){
			sh 'yarn build'
		}	
	}

	def imageName = 'my-image'
	def dockerName = 'my-image'
	def betaClient = docker.build("registry.cn-hangzhou.aliyuncs.com/lj316641206/${imageName}:${env.BUILD_ID}")
	betaClient.push()
	betaClient.push('latest')

	sh 'docker stop ${dockerName} && docker rm $(docker ps -aqf "name=${dockerName}")'
	sh 'docker run -d -i -p 9001:80 --name ${dockerName} registry.cn-hangzhou.aliyuncs.com/lj316641206/${dockerName}:$BUILD_ID'
}