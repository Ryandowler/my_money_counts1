class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :authenticate_user! #not sure if does anything

  def hello
  	render text: "Hello worldo!!"
  end



      #if user_signed_in?
      #get the orgs belloning to the user
      #@users_books = Book.where(["user_id = ?", current_user.id])
      #@user = current_user
   #end
end
