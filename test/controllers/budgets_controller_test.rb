require 'test_helper'

class BudgetsControllerTest < ActionController::TestCase
  setup do
    @budget = budgets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:budgets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create budget" do
    assert_difference('Budget.count') do
      post :create, budget: { activities: @budget.activities, bills: @budget.bills, clothing: @budget.clothing, emergency_fund: @budget.emergency_fund, entertainment: @budget.entertainment, lunches: @budget.lunches, money_in: @budget.money_in, phone: @budget.phone, savings: @budget.savings, title: @budget.title, travel: @budget.travel, week: @budget.week }
    end

    assert_redirected_to budget_path(assigns(:budget))
  end

  test "should show budget" do
    get :show, id: @budget
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @budget
    assert_response :success
  end

  test "should update budget" do
    patch :update, id: @budget, budget: { activities: @budget.activities, bills: @budget.bills, clothing: @budget.clothing, emergency_fund: @budget.emergency_fund, entertainment: @budget.entertainment, lunches: @budget.lunches, money_in: @budget.money_in, phone: @budget.phone, savings: @budget.savings, title: @budget.title, travel: @budget.travel, week: @budget.week }
    assert_redirected_to budget_path(assigns(:budget))
  end

  test "should destroy budget" do
    assert_difference('Budget.count', -1) do
      delete :destroy, id: @budget
    end

    assert_redirected_to budgets_path
  end
end
