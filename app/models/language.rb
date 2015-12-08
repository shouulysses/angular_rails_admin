class Language < ActiveRecord::Base
  has_one :language_details
  validates :name, presence: true
end
