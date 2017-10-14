class CreateBudgets < ActiveRecord::Migration
  def change
    create_table :budgets do |t|
      t.string :title
      t.decimal :money_in
      t.integer :week
      t.decimal :savings
      t.decimal :bills
      t.decimal :lunches
      t.decimal :phone
      t.decimal :travel
      t.decimal :clothing
      t.decimal :activities
      t.decimal :entertainment
      t.decimal :emergency_fund

      t.timestamps null: false
    end
  end
end
