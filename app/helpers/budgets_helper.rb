module BudgetsHelper

	def bleh
		arr = [[3,4],[5,6]]
		arr.each do |(a,b)|
		  puts "#{a} #{b}"
		  puts a
		end
	end

	def comebacktonameme

		@column_names_array.delete("title")
		@column_names_array.delete("updated_at")
		@column_names_array.delete("created_at")
		@column_names_array.delete("user_id")
		@column_names_array.delete("id")
		return @column_names_array
	end



end
