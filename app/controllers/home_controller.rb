class HomeController < ActionController::Base
  protect_from_forgery

  def index

    #render :layout => false
  end
  
  def blitz
    return '42'
  end
end
