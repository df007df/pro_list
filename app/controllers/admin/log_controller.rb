class Admin::LogController < ApplicationController
	layout 'admin'
	before_action :set_pro, only: [:list]

	def initialize
		@nav_id = 'admin-log'
		super
	end

	def index
        @nav_id = 'admin-log'

	end


	def list
		@rows = params[:rows]

	end


	private

	def set_pro

	  begin
	  	@pro = Pro.find(params[:id])
	  rescue
	  	render_not_found
	  end

    end

end