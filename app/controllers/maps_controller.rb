class MapsController < ApplicationController

	require 'open-uri'
	require 'uri'
  

	def index
		@pros = Pro.all

		@pro_list_adress = []
		@pro_list_ip = []
		@pro_list = []

		urls = []

		#pro_list 

		@pros.each do |item|
			if !item.url.empty?
	
			 @pro_list.push(item)
		   end
    	end
 
	end	


	def getAdress 
			url = params[:url]
			hosturl = URI.parse(url).host
			hosturl ||= url
			if hosturl
				ip = IPSocket.getaddress(hosturl)
				@pro_list_adress = getAdressForIp(ip)
				render :json => @pro_list_adress.to_json
			else 
				render :json => '[]'	
			end
	end	

	

	private

	def getAdressForIp(ip = '')
		api = "https://api.weibo.com/2/location/geo/ip_to_geo.json?ip=#{ip}&access_token=2.00TJ877B0wq4Ihccfb424a92Kww4MB"
		if ip
			response = open(api).read
			data = JSON::parse(response)
			data['geos'] ? data['geos'] : []
		end	
	end	


	def tt
		conn = Faraday.new(:url => api) do |faraday|
			  faraday.request  :url_encoded             # form-encode POST params
			  faraday.response :logger                  # log requests to STDOUT
			  faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
			end

			response = conn.get '/', { :ip => ip, :access_token => '2.00TJ877B0wq4Ihccfb424a92Kww4MB' } 

			logger.debug response.body

	end	

	

end
