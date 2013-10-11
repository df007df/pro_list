class UsersController < ApplicationController

	def index
		
		
	end	

	def login
		
		@userlogin = params.permit(:username, :pwd)

		if @userlogin[:username] == 'admin' && @userlogin[:pwd] == '123456'
			loginAdmin
			redirect_to pros_url, notice: '登陆成功!'	
		else
			redirect_to pros_url, alert: '登陆失败!'	
		end	
		
		
		#redirect_to pros_url, notice: '登陆成功!'
	end	

	def logout
		logoutAdmin
		redirect_to pros_url, notice: '已经退出!'	
	end
end
