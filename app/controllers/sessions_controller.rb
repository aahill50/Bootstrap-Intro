class SessionsController < ApplicationController
  before_action :require_signed_out!, :only => [:new, :create]
  before_action :require_signed_in!, :only => [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      sign_in(@user)

      if request.xhr?
        head :ok
      else
        redirect_to user_url(@user)
      end
      # respond_to do |format|
      #   format.html { redirect_to user_url(@user) }
      #   format.json { head :ok }
      # end
    else
      respond_to do |format|
        format.json { render json: "Invalid credentials", status: 422 }
      end
      # flash.now[:errors] = ["Invalid Credentials"]
      # render :new
    end
  end

  def destroy
    sign_out
    flash[:notice] = ["Successfully logged out!"]
    head :ok
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
