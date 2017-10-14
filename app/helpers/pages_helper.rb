module PagesHelper
	def current_week
	 Date.today.strftime("%U").to_i # 43
	end
	
end
