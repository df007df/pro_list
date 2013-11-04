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



  def self.rescue_errors
     rescue_from Exception,                            :with => :render_error
     rescue_from RuntimeError,                         :with => :render_error
     rescue_from ActiveRecord::RecordNotFound,         :with => :render_not_found
     rescue_from ActionController::RoutingError,       :with => :render_not_found
     rescue_from ActionController::UnknownController,  :with => :render_not_found
     rescue_from ActionController::UnknownAction,      :with => :render_not_found
  end

  rescue_errors unless Rails.env.development?

  def render_not_found(exception = nil)
    
    
    render :template => "errors/404", :status => 404, :layout => false
  end

  def render_error(exception = nil)
   render :template => "errors/500", :status => 500, :layout => false
  end

end
