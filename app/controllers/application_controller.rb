class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def loginAdmin
	session[:isAdmin] = true
	session[:user] = {username: 'admin'}
	#session[:user][:username] = 'admin'
  end	

  def logoutAdmin
	session[:isAdmin] = nil
	session[:user] = nil
  end

end
