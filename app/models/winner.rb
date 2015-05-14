class Winner < ActiveRecord::Base
  def as_json(options = {})
    {:name => self.name,
      :win_count => self.win_count,
      :id => self.id}
  end
end