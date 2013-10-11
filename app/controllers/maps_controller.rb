class MapsController < ApplicationController

	require 'open-uri'
  

	def index
		@pros = Pro.all

		@pro_list_adress = []
		#pro_list 

		@pros.each do |item|
			
			if !item.url.empty?
			 logger.debug item.url
			 ip = IPSocket.getaddress(item.url)
			 @pro_list_adress.push getAdressForIp ip
		  end
    end

		@pro_list_adress
	end	

	def getAdressForIp(ip = '')
		api = "https://api.weibo.com/2/location/geo/ip_to_geo.json?ip=#{ip}&access_token=2.00TJ877B0wq4Ihccfb424a92Kww4MB"
		if ip
			response = open(api).read
			data = JSON::parse(response)

			{:longitude => data['geos'][0]['longitude'], 
				:latitude => data['geos'][0]['latitude'], 
				:more => data['geos'][0]['more']
			}

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
