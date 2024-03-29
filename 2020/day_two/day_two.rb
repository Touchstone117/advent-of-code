# frozen_string_literal: true

require_relative '../lib/env'

class DayTwo
  def initialize(input_data)
    @parsed_input = parse_input(input_data)
  end

  def parse_input(input_data)
    parsed_input = []
    input_data.each do |line|
      split = line.split(' ')
      split[1].chop!
      parsed_input << split
    end
    parsed_input
  end

  def parse_line(line)
    parsed_line = {}
    range = line[0].split('-')
    parsed_line[:range_start] = range[0].to_i
    parsed_line[:range_end] = range[1].to_i
    parsed_line[:rule_char] = line[1]
    parsed_line[:password] = line[2]
    parsed_line
  end

  def evaluate_password_part_one(parsed_line)
    instances = parsed_line[:password].count(
      parsed_line[:rule_char]
    )

    instances >= parsed_line[:range_start] && instances <= parsed_line[:range_end]
  end

  def evaluate_password_part_two(parsed_line)
    first = parsed_line[:password][parsed_line[:range_start] - 1]
    second = parsed_line[:password][parsed_line[:range_end] - 1]

    (first == parsed_line[:rule_char]) ^ (second == parsed_line[:rule_char])
  end

  def solve_part_one
    count = 0
    @parsed_input.each do |line|
      count += 1 if evaluate_password_part_one(parse_line(line))
    end
    count
  end

  def solve_part_two
    count = 0
    @parsed_input.each do |line|
      count += 1 if evaluate_password_part_two(parse_line(line))
    end
    count
  end
end

module DayTwoInput
  def self.practice
    File.readlines('./day_two/part_one_practice_input.txt')
  end

  def self.real
    File.readlines('./day_two/part_one_real_input.txt')
  end
end
