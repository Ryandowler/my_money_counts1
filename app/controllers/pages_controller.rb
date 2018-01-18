class PagesController < ApplicationController
	before_filter :authenticate_user!

  def home
  end

  def about

  end

  def front

  end

  def profile

  	 if user_signed_in?
      #get the orgs belloning to the user
      @user = current_user
      @users_budgets = Budget.where(["user_id = ?", @user.id])
      @budgets = Budget.all
   end

  end

  
end
