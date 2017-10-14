class AddDefaultValueToBudgetFields < ActiveRecord::Migration
	def up
	  change_column_default :budgets, :bills, 0
	  change_column_default :budgets, :lunches, 0
	  change_column_default :budgets, :phone, 0
	  change_column_default :budgets, :travel, 0
	  change_column_default :budgets, :clothing, 0
	  change_column_default :budgets, :activities, 0
	  change_column_default :budgets, :entertainment, 0
	  change_column_default :budgets, :emergency_fund, 0
	end
end
