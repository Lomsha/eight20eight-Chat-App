class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true, length: {minimu: 3, maximum: 15}
    has_secure_password
end
