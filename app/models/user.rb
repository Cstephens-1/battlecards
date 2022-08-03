class User < ApplicationRecord
    has_secure_password
    has_one :library
    has_many :units, through: :library
end
