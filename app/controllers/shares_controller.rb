class SharesController < ApplicationController

  def index
  end

  def new
    @share = Share.new
  end

  def create
  end

  private
  def share_params
    params.require(:share).
    permit(:title, :content, :location, :partner, :priority).
    merge(user_id: current_user.id)
  end

end
