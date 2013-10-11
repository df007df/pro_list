class MapsController < ApplicationController

	require 'open-uri'
  

	def index
		
		pro_list_adress = []
		#pro_list 

		ip = IPSocket.getaddress('oa.a-y.com.cn')
		
		pro_list_adress = getAdressForIp ip
		

		logger.debug pro_list_adress


		
	end	

	def getAdressForIp(ip = '')
		api = "https://api.weibo.com/2/location/geo/ip_to_geo.json?ip=#{ip}&access_token=2.00TJ877B0wq4Ihccfb424a92Kww4MB"
		if ip

			response = open(api).read
			data = JSON::parse(response)
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
