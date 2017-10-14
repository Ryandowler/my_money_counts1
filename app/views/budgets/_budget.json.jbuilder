json.extract! budget, :id, :title, :money_in, :week, :savings, :bills, :lunches, :phone, :travel, :clothing, :activities, :entertainment, :emergency_fund, :created_at, :updated_at
json.url budget_url(budget, format: :json)
