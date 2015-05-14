require 'sinatra/json'

get '/api/winners' do
 @data = Winner.all
 json @data
end


get '/' do
  erb :index
end




