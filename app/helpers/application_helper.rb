module ApplicationHelper

	def h_flash_notice(type = '')

			if !flash[:notice].nil?
				   return "<div class='alert alert-success alert-dismissable  fade in'>
				   <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
				   <strong><span class='glyphicon glyphicon-ok-sign'></span></strong>  
				   #{flash[:notice]}
				   </div>" 	
			end	

			if !flash[:alert].nil?
				   return "<div class='alert alert-warning alert-dismissable  fade in'>
				   <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
				   <strong><span class='glyphicon glyphicon-ok-sign'></span></strong>  
				   #{flash[:alert]}
				   </div>" 	
			end
	end
	
	def renderTitle(title = '')

		return "<h3 class=text-info>#{title}</h3>"

	end	


	def isActive(path = '')
		request.path =~ /#{path}/i ? 'class=active' : ''
	end	

	def isAdmin?
		!session[:isAdmin].blank?
	end

	def user(key = '')

		if key
			session[:user][key] ? session[:user][key] : ''
		else
			session[:user]	
		end		
	end 


	def getPros
		@pro_list = []
		@pros = Pro.all

		@pros.each do |item|
			if !item.url.empty?
			 @pro_list.push(item)
		   end
    	end

    	"<script>var pro_list = #{@pro_list.to_json};</script>"

	end	

end
