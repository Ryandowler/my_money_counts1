class Budget < ActiveRecord::Base
	belongs_to :user

	validates :title, presence: true,
			:length => { :minimum => 2, :maximum => 24, :message => "has invalid length"}




end
