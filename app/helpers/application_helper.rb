module ApplicationHelper

	def h_flash_notice(type = '')

			if !flash[:notice].nil?
				   "<div class='alert alert-success alert-dismissable  fade in'>
				   <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
				   <strong><span class='glyphicon glyphicon-ok-sign'></span></strong>  
				   #{flash[:notice]}
				   </div>" 	
			end	
	end
	
	def renderTitle(title = '')

		return "<h3 class=text-info>#{title}</h3>"

	end	


	def isActive(path = '')
		puts request.path
		return request.path =~ /#{path}/i ? 'class=active' : ''
	end	


end
