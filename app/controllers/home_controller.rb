class HomeController < ActionController::Base
  protect_from_forgery

  def index
    
    
  end
  
  def json
    require 'oauth'

    # Fill the keys and secrets you retrieved after registering your app
    api_key = 'exqo15wuk9pw'
    api_secret = 'LM1s7PcUksY9jSq3'
    user_token = '18931d7b-c733-483f-adbe-cad862e91f3e'
    user_secret = 'ad0f1912-dbd3-4859-92db-c2b5b0dbbc04'

    # Specify LinkedIn API endpoint
    configuration = { :site => 'https://api.linkedin.com' }

    # Use your API key and secret to instantiate consumer object
    consumer = OAuth::Consumer.new(api_key, api_secret, configuration)

    # Use your developer token and secret to instantiate access token object
    access_token = OAuth::AccessToken.new(consumer, user_token, user_secret)
    
    puts access_token.inspect

    # Make call to LinkedIn to retrieve your own profile
    

    # By default, the LinkedIn API responses are in XML format. If you prefer JSON, simply specify the format in your call
    response = access_token.get("http://api.linkedin.com/v1/people/~?format=json")
    
    response = access_token.get("http://api.linkedin.com/v1/people-search?keywords=Hacker")

    #render :layout => false
    render :json => response
  end
end
