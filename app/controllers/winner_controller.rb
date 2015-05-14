
get '/api/winners' do
 @data = Winner.all
end


get '/' do
  redirect '../../../public/index.html'
end

post
