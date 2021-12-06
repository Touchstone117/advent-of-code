# frozen_string_literal: true

require 'env'

module DayThreeInput
  def self.practice
    File.readlines("#{__dir__}/input_practice.txt")
  end

  def self.real
    File.readlines("#{__dir__}/input_real.txt")
  end
end

class DayThreeTest < MiniTest::Test
  def test_day_one_part_one_practice
    assert_equal 198, DayThree.new(DayThreeInput.practice).solve_part_one
  end

  def test_day_one_part_one_real
    assert_equal 2_035_764, DayThree.new(DayThreeInput.real).solve_part_one
  end

  def test_day_one_part_two_practice
    assert_equal 230, DayThree.new(DayThreeInput.practice).solve_part_two
  end

  def test_day_one_part_two_real
    assert_equal 2_817_661, DayThree.new(DayThreeInput.real).solve_part_two
  end
end

class DayThree
  def initialize(input)
    @input = input
  end

  def count_bits(input_bits)
    output = ''
    {
      ones: input_bits.count(1),
      zeros: input_bits.count(0)
    }
  end

  def gamma_rate_calc(input)
    # Finds most common
    return '0' if input[:ones] < input[:zeros]
    return '1' if input[:ones] > input[:zeros]

    raise 'neither'
  end

  def epsilon_rate_calc(input)
    # Finds least common
    return '0' if input[:ones] > input[:zeros]
    return '1' if input[:ones] < input[:zeros]

    raise 'neither'
  end

  def oxygen_generator_rating_calc(input)
    # most common, equal = 1
    return '0' if input[:ones] < input[:zeros]
    return '1' if input[:ones] > input[:zeros]
    return '1' if input[:ones] == input[:zeros]

    raise 'none'
  end

  def co2_scrubber_rating_calc(input)
    # least common, equal = 0
    return '0' if input[:ones] > input[:zeros]
    return '1' if input[:ones] < input[:zeros]
    return '0' if input[:ones] == input[:zeros]

    raise 'neither'
  end

  def index_bits(index, array)
    index_bits = []

    array.each do |line|
      index_bits << line[index].to_i
    end

    index_bits
  end

  def solve_part_one
    gamma_rate = ''
    epsilon_rate = ''

    @input[0].strip.length.times do |i|
      counted = count_bits(index_bits(i, @input))

      gamma_rate += gamma_rate_calc(counted)
      epsilon_rate += epsilon_rate_calc(counted)
    end

    gamma_rate.to_i(2) * epsilon_rate.to_i(2)
  end

  def delete_from_index(array, choice, index)
    array.delete_if do |line|
      line[index] != choice
    end
  end

  def solve_part_two
    oxygen_rate = @input.dup

    @input[0].strip.length.times do |i|
      counted = count_bits(index_bits(i, oxygen_rate))

      oxygen_rate_choice = oxygen_generator_rating_calc(counted)

      oxygen_rate = delete_from_index(oxygen_rate, oxygen_rate_choice, i)

      break if oxygen_rate.length == 1
    end

    co2_rate = @input.dup
    @input[0].strip.length.times do |i|
      counted = count_bits(index_bits(i, co2_rate))

      co2_rate_choice = co2_scrubber_rating_calc(counted)

      co2_rate = delete_from_index(co2_rate, co2_rate_choice, i)

      break if co2_rate.length == 1
    end

    oxygen_rate.first.to_i(2) * co2_rate.first.to_i(2)
  end
end
