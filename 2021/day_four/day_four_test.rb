# frozen_string_literal: true

require 'env'

module DayFourInput
  def self.practice
    File.readlines("#{__dir__}/input_practice.txt")
  end

  def self.practice_column
    File.readlines("#{__dir__}/input_practice_column.txt")
  end

  def self.real
    File.readlines("#{__dir__}/input_real.txt")
  end
end

class DayFourTest < MiniTest::Test
  def test_day_one_part_one_practice
    assert_equal 4512, DayFour.new(DayFourInput.practice).solve_part_one
  end

  def test_day_one_part_one_real
    assert_equal 10_680, DayFour.new(DayFourInput.real).solve_part_one
  end

  def test_day_one_part_two_practice
    assert_equal 1924, DayFour.new(DayFourInput.practice).solve_part_two
  end

  def test_day_one_part_two_practice_column
    assert_equal 1924, DayFour.new(DayFourInput.practice_column).solve_part_two
  end

  def test_day_one_part_two_real
    assert_equal 31_892, DayFour.new(DayFourInput.real).solve_part_two
  end
end

class DayFour
  def initialize(input)
    data_load(input)
  end

  def data_load(input)
    @called_numbers = input.shift.split(',').map(&:to_i)
    @cards = []

    until input.length.zero?
      new_board = input.shift(6)
      new_board.shift
      new_board.map! do |line|
        line.split(' ').map!(&:to_i)
      end
      @cards << new_board
    end
  end

  def evaluate_card(card, called_numbers)
    last_number = nil
    ## Does it match a row

    card.each do |line|
      ## If remaining array is empty then it matched
      remaining = line - called_numbers
      matched = true if remaining.empty?
      next unless matched

      ## If it did match
      ## Set Last Number
      last_number = called_numbers.last

      break
    end
    last_number
  end

  def solve_part_one
    last_number = nil
    values_to_sum = []
    @called_numbers.each_index do |i|
      next if i < 4

      winner = false
      current_called = @called_numbers[0..i]
      @cards.each do |card|
        card.each do |line|
          remaining = line - current_called
          winner = true if remaining.empty?
          next unless winner

          last_number = current_called.last
          break
        end

        transposed = card.transpose

        transposed.each do |line|
          remaining = line - current_called
          winner = true if remaining.empty?
          next unless winner

          last_number = current_called.last
          break
        end

        next unless winner

        card.each do |line|
          non_called_values = line - current_called
          values_to_sum += non_called_values.map(&:to_i)
        end
        break
      end
      break if winner
    end

    values_to_sum.sum * last_number
  end

  def solve_part_two
    last_number = false
    values_to_sum = []
    output_cards = @cards.dup
    current_called = nil
    last_winning_card = nil

    @called_numbers.each_index do |i|
      next if i < 4

      current_called = @called_numbers[0..i]
      last_winning_card = @cards.dup if @cards.length == 1

      @cards.delete_if do |card|
        last_number = false
        last_number = evaluate_card(card, current_called)

        last_number ||= evaluate_card(card.transpose, current_called)

        if last_number
          true
        else
          false
        end
      end

      break if @cards.length.zero?
    end

    last_winning_card.first.each do |line|
      non_called_values = line - current_called
      values_to_sum += non_called_values.map(&:to_i)
    end

    values_to_sum.compact.sum * last_number
  end
end
