class UsersController < ApplicationController

  def index
  end

  def show
  end

  private
  def user_params
    params.require(:user).
    permit(:nickname, :email, :encrypted_password, :last_name, :first_name, :lname_kana, :fname_kana, :birthday)
  end

end
